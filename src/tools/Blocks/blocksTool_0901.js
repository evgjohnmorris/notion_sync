/**
 * Generated Tool: blocksTool_0901
 * Domain: Blocks
 * ID: 0901
 */
exports.blocksTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0901:', error);
    throw error;
  }
};
