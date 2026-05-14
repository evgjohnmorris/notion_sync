/**
 * Generated Tool: blocksTool_0371
 * Domain: Blocks
 * ID: 0371
 */
exports.blocksTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0371:', error);
    throw error;
  }
};
