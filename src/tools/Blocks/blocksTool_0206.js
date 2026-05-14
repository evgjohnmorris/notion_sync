/**
 * Generated Tool: blocksTool_0206
 * Domain: Blocks
 * ID: 0206
 */
exports.blocksTool_0206 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0206:', error);
    throw error;
  }
};
