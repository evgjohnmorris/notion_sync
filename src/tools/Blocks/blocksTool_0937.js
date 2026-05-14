/**
 * Generated Tool: blocksTool_0937
 * Domain: Blocks
 * ID: 0937
 */
exports.blocksTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0937:', error);
    throw error;
  }
};
