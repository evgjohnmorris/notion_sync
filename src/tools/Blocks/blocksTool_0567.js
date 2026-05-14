/**
 * Generated Tool: blocksTool_0567
 * Domain: Blocks
 * ID: 0567
 */
exports.blocksTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0567:', error);
    throw error;
  }
};
