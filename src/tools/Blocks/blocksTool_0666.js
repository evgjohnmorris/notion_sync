/**
 * Generated Tool: blocksTool_0666
 * Domain: Blocks
 * ID: 0666
 */
exports.blocksTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0666:', error);
    throw error;
  }
};
