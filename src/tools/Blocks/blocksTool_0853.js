/**
 * Generated Tool: blocksTool_0853
 * Domain: Blocks
 * ID: 0853
 */
exports.blocksTool_0853 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0853:', error);
    throw error;
  }
};
