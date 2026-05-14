/**
 * Generated Tool: blocksTool_0322
 * Domain: Blocks
 * ID: 0322
 */
exports.blocksTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0322:', error);
    throw error;
  }
};
