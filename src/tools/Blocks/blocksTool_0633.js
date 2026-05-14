/**
 * Generated Tool: blocksTool_0633
 * Domain: Blocks
 * ID: 0633
 */
exports.blocksTool_0633 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0633:', error);
    throw error;
  }
};
