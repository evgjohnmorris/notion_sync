/**
 * Generated Tool: blocksTool_0606
 * Domain: Blocks
 * ID: 0606
 */
exports.blocksTool_0606 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0606:', error);
    throw error;
  }
};
