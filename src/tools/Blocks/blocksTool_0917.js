/**
 * Generated Tool: blocksTool_0917
 * Domain: Blocks
 * ID: 0917
 */
exports.blocksTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0917:', error);
    throw error;
  }
};
