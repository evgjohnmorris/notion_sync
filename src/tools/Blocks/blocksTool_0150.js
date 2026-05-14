/**
 * Generated Tool: blocksTool_0150
 * Domain: Blocks
 * ID: 0150
 */
exports.blocksTool_0150 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0150:', error);
    throw error;
  }
};
