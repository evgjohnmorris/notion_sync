/**
 * Generated Tool: blocksTool_0073
 * Domain: Blocks
 * ID: 0073
 */
exports.blocksTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0073:', error);
    throw error;
  }
};
