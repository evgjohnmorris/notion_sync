/**
 * Generated Tool: blocksTool_0872
 * Domain: Blocks
 * ID: 0872
 */
exports.blocksTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0872:', error);
    throw error;
  }
};
