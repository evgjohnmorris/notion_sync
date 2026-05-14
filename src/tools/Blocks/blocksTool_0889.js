/**
 * Generated Tool: blocksTool_0889
 * Domain: Blocks
 * ID: 0889
 */
exports.blocksTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0889:', error);
    throw error;
  }
};
