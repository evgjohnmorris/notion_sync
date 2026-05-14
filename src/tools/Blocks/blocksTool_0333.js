/**
 * Generated Tool: blocksTool_0333
 * Domain: Blocks
 * ID: 0333
 */
exports.blocksTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0333:', error);
    throw error;
  }
};
