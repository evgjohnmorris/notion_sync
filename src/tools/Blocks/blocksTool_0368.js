/**
 * Generated Tool: blocksTool_0368
 * Domain: Blocks
 * ID: 0368
 */
exports.blocksTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0368:', error);
    throw error;
  }
};
