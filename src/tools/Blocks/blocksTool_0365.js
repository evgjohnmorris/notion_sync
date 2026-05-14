/**
 * Generated Tool: blocksTool_0365
 * Domain: Blocks
 * ID: 0365
 */
exports.blocksTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0365:', error);
    throw error;
  }
};
