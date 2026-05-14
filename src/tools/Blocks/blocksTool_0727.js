/**
 * Generated Tool: blocksTool_0727
 * Domain: Blocks
 * ID: 0727
 */
exports.blocksTool_0727 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0727:', error);
    throw error;
  }
};
