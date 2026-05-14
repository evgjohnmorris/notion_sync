/**
 * Generated Tool: blocksTool_0723
 * Domain: Blocks
 * ID: 0723
 */
exports.blocksTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0723:', error);
    throw error;
  }
};
