/**
 * Generated Tool: blocksTool_0305
 * Domain: Blocks
 * ID: 0305
 */
exports.blocksTool_0305 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0305:', error);
    throw error;
  }
};
