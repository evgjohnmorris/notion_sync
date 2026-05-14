/**
 * Generated Tool: blocksTool_0086
 * Domain: Blocks
 * ID: 0086
 */
exports.blocksTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0086:', error);
    throw error;
  }
};
