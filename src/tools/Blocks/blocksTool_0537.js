/**
 * Generated Tool: blocksTool_0537
 * Domain: Blocks
 * ID: 0537
 */
exports.blocksTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0537:', error);
    throw error;
  }
};
