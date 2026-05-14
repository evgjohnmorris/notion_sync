/**
 * Generated Tool: blocksTool_0646
 * Domain: Blocks
 * ID: 0646
 */
exports.blocksTool_0646 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0646:', error);
    throw error;
  }
};
