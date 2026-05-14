/**
 * Generated Tool: blocksTool_0084
 * Domain: Blocks
 * ID: 0084
 */
exports.blocksTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0084:', error);
    throw error;
  }
};
