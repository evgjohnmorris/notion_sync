/**
 * Generated Tool: blocksTool_0387
 * Domain: Blocks
 * ID: 0387
 */
exports.blocksTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0387:', error);
    throw error;
  }
};
