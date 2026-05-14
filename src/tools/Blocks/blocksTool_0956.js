/**
 * Generated Tool: blocksTool_0956
 * Domain: Blocks
 * ID: 0956
 */
exports.blocksTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0956:', error);
    throw error;
  }
};
