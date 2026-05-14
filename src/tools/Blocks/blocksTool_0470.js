/**
 * Generated Tool: blocksTool_0470
 * Domain: Blocks
 * ID: 0470
 */
exports.blocksTool_0470 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0470:', error);
    throw error;
  }
};
