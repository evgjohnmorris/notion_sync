/**
 * Generated Tool: blocksTool_0953
 * Domain: Blocks
 * ID: 0953
 */
exports.blocksTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0953:', error);
    throw error;
  }
};
