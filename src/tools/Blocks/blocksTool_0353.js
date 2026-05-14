/**
 * Generated Tool: blocksTool_0353
 * Domain: Blocks
 * ID: 0353
 */
exports.blocksTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0353:', error);
    throw error;
  }
};
