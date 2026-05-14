/**
 * Generated Tool: blocksTool_0560
 * Domain: Blocks
 * ID: 0560
 */
exports.blocksTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0560:', error);
    throw error;
  }
};
