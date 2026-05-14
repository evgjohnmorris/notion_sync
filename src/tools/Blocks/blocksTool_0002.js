/**
 * Generated Tool: blocksTool_0002
 * Domain: Blocks
 * ID: 0002
 */
exports.blocksTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0002:', error);
    throw error;
  }
};
