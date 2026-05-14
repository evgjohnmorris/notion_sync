/**
 * Generated Tool: blocksTool_0060
 * Domain: Blocks
 * ID: 0060
 */
exports.blocksTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0060:', error);
    throw error;
  }
};
