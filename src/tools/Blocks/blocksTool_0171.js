/**
 * Generated Tool: blocksTool_0171
 * Domain: Blocks
 * ID: 0171
 */
exports.blocksTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0171:', error);
    throw error;
  }
};
