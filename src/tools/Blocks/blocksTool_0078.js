/**
 * Generated Tool: blocksTool_0078
 * Domain: Blocks
 * ID: 0078
 */
exports.blocksTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0078:', error);
    throw error;
  }
};
