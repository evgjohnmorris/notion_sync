/**
 * Generated Tool: blocksTool_0260
 * Domain: Blocks
 * ID: 0260
 */
exports.blocksTool_0260 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0260:', error);
    throw error;
  }
};
