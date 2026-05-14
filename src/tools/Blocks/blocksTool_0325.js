/**
 * Generated Tool: blocksTool_0325
 * Domain: Blocks
 * ID: 0325
 */
exports.blocksTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0325:', error);
    throw error;
  }
};
