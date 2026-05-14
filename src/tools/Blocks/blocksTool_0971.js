/**
 * Generated Tool: blocksTool_0971
 * Domain: Blocks
 * ID: 0971
 */
exports.blocksTool_0971 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0971:', error);
    throw error;
  }
};
