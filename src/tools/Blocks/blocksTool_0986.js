/**
 * Generated Tool: blocksTool_0986
 * Domain: Blocks
 * ID: 0986
 */
exports.blocksTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0986:', error);
    throw error;
  }
};
