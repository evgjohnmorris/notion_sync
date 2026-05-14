/**
 * Generated Tool: blocksTool_0187
 * Domain: Blocks
 * ID: 0187
 */
exports.blocksTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0187:', error);
    throw error;
  }
};
