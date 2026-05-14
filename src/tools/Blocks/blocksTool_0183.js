/**
 * Generated Tool: blocksTool_0183
 * Domain: Blocks
 * ID: 0183
 */
exports.blocksTool_0183 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0183:', error);
    throw error;
  }
};
