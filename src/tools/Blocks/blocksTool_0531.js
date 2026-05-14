/**
 * Generated Tool: blocksTool_0531
 * Domain: Blocks
 * ID: 0531
 */
exports.blocksTool_0531 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0531:', error);
    throw error;
  }
};
