/**
 * Generated Tool: blocksTool_0880
 * Domain: Blocks
 * ID: 0880
 */
exports.blocksTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0880:', error);
    throw error;
  }
};
