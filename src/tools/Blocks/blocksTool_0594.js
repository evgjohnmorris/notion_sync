/**
 * Generated Tool: blocksTool_0594
 * Domain: Blocks
 * ID: 0594
 */
exports.blocksTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0594:', error);
    throw error;
  }
};
