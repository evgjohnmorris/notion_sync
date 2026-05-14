/**
 * Generated Tool: blocksTool_0613
 * Domain: Blocks
 * ID: 0613
 */
exports.blocksTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0613:', error);
    throw error;
  }
};
