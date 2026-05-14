/**
 * Generated Tool: blocksTool_0025
 * Domain: Blocks
 * ID: 0025
 */
exports.blocksTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0025:', error);
    throw error;
  }
};
