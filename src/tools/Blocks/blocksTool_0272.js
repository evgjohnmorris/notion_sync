/**
 * Generated Tool: blocksTool_0272
 * Domain: Blocks
 * ID: 0272
 */
exports.blocksTool_0272 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0272:', error);
    throw error;
  }
};
