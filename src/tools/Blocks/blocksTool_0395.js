/**
 * Generated Tool: blocksTool_0395
 * Domain: Blocks
 * ID: 0395
 */
exports.blocksTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0395:', error);
    throw error;
  }
};
