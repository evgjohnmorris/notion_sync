/**
 * Generated Tool: blocksTool_0047
 * Domain: Blocks
 * ID: 0047
 */
exports.blocksTool_0047 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0047:', error);
    throw error;
  }
};
