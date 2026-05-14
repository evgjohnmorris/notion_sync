/**
 * Generated Tool: blocksTool_0427
 * Domain: Blocks
 * ID: 0427
 */
exports.blocksTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0427:', error);
    throw error;
  }
};
