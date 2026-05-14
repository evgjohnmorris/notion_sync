/**
 * Generated Tool: blocksTool_0451
 * Domain: Blocks
 * ID: 0451
 */
exports.blocksTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0451:', error);
    throw error;
  }
};
