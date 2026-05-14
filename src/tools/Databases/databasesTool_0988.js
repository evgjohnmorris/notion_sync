/**
 * Generated Tool: databasesTool_0988
 * Domain: Databases
 * ID: 0988
 */
exports.databasesTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0988:', error);
    throw error;
  }
};
