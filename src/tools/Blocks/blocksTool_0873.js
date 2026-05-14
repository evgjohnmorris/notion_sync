/**
 * Generated Tool: blocksTool_0873
 * Domain: Blocks
 * ID: 0873
 */
exports.blocksTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0873:', error);
    throw error;
  }
};
